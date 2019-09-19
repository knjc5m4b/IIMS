import { Component, Input, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'app-slide-dialog',
    templateUrl: './slide-dialog.component.html',
    styleUrls: ['./slide-dialog.component.css']
})
export class SlideDialogComponent implements OnInit {

    slideimage: any;
    allimages: any[] = [];
    slidedata = [];
    isimg: boolean;

    constructor(
        private dialogRef: MatDialogRef<SlideDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: any,
    ) {
    }

    ngOnInit() {
        this.haveimg();
    }

    cancel() {
        this.dialogRef.close();
    }

    confirm() {
            this.slidedata = [this.allimages];
            this.dialogRef.close(this.slidedata);
    }

    imgupload(event) {
        if (event.target.files && event.target.files.length >= 0) {
            let i: number;
            for (i = 0 ; i < event.target.files.length ; i ++) {
                const reader = new FileReader();
                reader.readAsDataURL(event.target.files[i]); // read file as data url
                reader.onload = () => { // called once readAsDataURL is completed
                  this.slideimage = reader.result;
                  this.allimages.push(this.slideimage);
                  this.haveimg();
                  console.log(this.slideimage);
                };
            }
        }
    }

    deleteimg(index: number) {
        this.allimages.splice(index, 1);
        console.log('index:', index);
        this.haveimg();
        // this.slideimage = '';
        // if (this.slideimage) {
        //     this.allimages.splice(index, 1);
        //     this.slideimage = '';
        // }
    }

    haveimg() {
        if (this.allimages.length === 0) {
            this.isimg = false;
        } else {
            this.isimg = true;
        }
        console.log(this.isimg);
    }

    // onSelectFile(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(event.target.files[0]);

    //         reader.onload = () => {
    //             this.tabimage = reader.result;
    //         };
    //     }
    // }

    // public dropped(event: UploadEvent) {
    //     this.files = event.files;
    //     for (const droppedFile of event.files) {
    //       if (droppedFile.fileEntry.isFile) {
    //         const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
    //         fileEntry.file((file: File) => {
    //           // Here you can access the real file
    //           console.log(droppedFile.relativePath, file);
    //         });
    //       } else {
    //         // It was a directory (empty directories are added, otherwise only files)
    //         const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    //         console.log(droppedFile.relativePath, fileEntry);
    //       }
    //     }
    //   }
}
