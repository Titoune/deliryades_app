import {Directive, HostBinding, Input, OnChanges} from '@angular/core';
import {Md5} from 'md5-typescript';
import {HttpClient} from '@angular/common/http';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import {File} from '@ionic-native/file/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import {ToolsService} from '../services/tools.service';
import {DomSanitizer} from '@angular/platform-browser';

@Directive({
    selector: '[appMecImageCache]',
})

export class MecImageCacheDirective implements OnChanges {

    @HostBinding('src') src;
    @Input() url: string;
    @Input() type: string;
    private md5_filename: string;

    constructor(
        private http: HttpClient,
        private transfer: FileTransfer,
        private file: File,
        private webview: WebView,
        private toolsService: ToolsService,
        private sanitizer: DomSanitizer
    ) {

    }


    async ngOnChanges() {

        if (this.type === 'man') {
            this.src = 'assets/default-img/man.jpg';
        } else if (this.type === 'woman') {
            this.src = 'assets/default-img/woman.jpg';
        } else if (this.type === 'mayor') {
            this.src = 'assets/default-img/mayor.jpg';
        } else if (this.type === 'city') {
            this.src = 'assets/default-img/city.jpg';
        } else if (this.type === 'publication') {
            this.src = 'assets/default-img/publication.png';
        } else if (this.type === 'councillor') {
            this.src = 'assets/default-img/councillor.png';
        } else if (this.type === 'ad') {
            this.src = 'assets/default-img/ad.png';
        } else if (this.type === 'negociation') {
            this.src = 'assets/default-img/negociation.png';
        } else if (this.type === 'signaling') {
            this.src = 'assets/default-img/signaling.png';
        } else {
            this.src = 'assets/default-img/unknown.png';
        }

        if (this.toolsService.device_platform !== 'web' && this.url.substr(this.url.lastIndexOf('/') + 1) !== 'null') {
            if (this.url) {
                this.md5_filename = Md5.init(this.url);
                this.checkFile().then((url: string) => {
                    this.src = this.sanitizer.bypassSecurityTrustUrl(url.replace(/^file:\/\//, ''));
                }, err => {
                    this.downloadFile().then((url: string) => {
                        this.src = this.sanitizer.bypassSecurityTrustUrl(url.replace(/^file:\/\//, ''));
                    });
                });
            }
        } else if (this.url.substr(this.url.lastIndexOf('/') + 1) !== 'null') {
            this.http.get(this.url, {responseType: 'blob'}).subscribe(data => {
                this.src = this.sanitizer.bypassSecurityTrustUrl(this.url);
            });
        }
    }

    checkFile() {
        return new Promise((resolve, reject) => {
            this.file.checkFile(this.file.cacheDirectory, this.md5_filename).then(res => {
                resolve(this.file.cacheDirectory + '/' + this.md5_filename);
            }).catch(error => {
                reject(error);
            });
        });
    }


    downloadFile() {
        return new Promise((resolve, reject) => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            fileTransfer.download(this.url, this.file.cacheDirectory + this.md5_filename, true, {
                headers: {Connection: 'close'},
                chunkedMode: false
            }).then((entry) => {
                resolve(entry.toURL());
            }, (error) => {
                reject(error);
            });
        });
    }


    // writeFile(blob) {
    //     return new Promise((resolve, reject) => {
    //         const {Filesystem} = Plugins;
    //         Filesystem.writeFile({
    //             path: this.file.cacheDirectory + this.md5_filename,
    //             data: blob,
    //             directory: FilesystemDirectory.Documents,
    //             encoding: FilesystemEncoding.UTF8
    //         }).then(result => {
    //             resolve(result);
    //         }).catch(error => {
    //             reject(error);
    //         });
    //     });
    // }


    // async fileRead() {
    //     const {Filesystem} = Plugins;
    //
    //     return await Filesystem.readFile({
    //         path: this.file.cacheDirectory + this.md5_filename,
    //         directory: FilesystemDirectory.Documents,
    //         encoding: FilesystemEncoding.UTF8
    //     });
    // }


    // async fileDelete() {
    //     const {Filesystem} = Plugins;
    //
    //     await Filesystem.deleteFile({
    //         path: 'secrets/text.txt',
    //         directory: FilesystemDirectory.Documents
    //     });
    // }
    //
    // async mkdir() {
    //     const {Filesystem} = Plugins;
    //
    //     try {
    //         let ret = await Filesystem.mkdir({
    //             path: 'secrets',
    //             directory: FilesystemDirectory.Documents,
    //             createIntermediateDirectories: false // like mkdir -p
    //         });
    //     } catch (e) {
    //         console.error('Unable to make directory', e);
    //     }
    // }
    //
    // async rmdir() {
    //     const {Filesystem} = Plugins;
    //
    //     try {
    //         let ret = await Filesystem.rmdir({
    //             path: 'secrets',
    //             directory: FilesystemDirectory.Documents
    //         });
    //     } catch (e) {
    //         console.error('Unable to remove directory', e);
    //     }
    // }
    //
    // async readdir() {
    //     const {Filesystem} = Plugins;
    //
    //     try {
    //         let ret = await Filesystem.readdir({
    //             path: 'secrets',
    //             directory: FilesystemDirectory.Documents
    //         });
    //     } catch (e) {
    //         console.error('Unable to read dir', e);
    //     }
    // }
    //
    // async stat() {
    //     const {Filesystem} = Plugins;
    //
    //     try {
    //         let ret = await Filesystem.stat({
    //             path: 'secrets/text.txt',
    //             directory: FilesystemDirectory.Documents
    //         });
    //     } catch (e) {
    //         console.error('Unable to stat file', e);
    //     }
    // }
    //
    // async readFilePath(filename) {
    //     const {Filesystem} = Plugins;
    //     try {
    //         return await Filesystem.readFile({path: 'file:///data/user/0/com.meridia.mairesetcitoyens/cache/' + filename});
    //     } catch (e) {
    //         return null;
    //     }
    // }
}