import { Component, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'app-tab-dialog',
    templateUrl: './tab-dialog.component.html',
    styleUrls: ['./tab-dialog.component.css']
})
export class TabDialogComponent {
    @Input() tabname: string;
    @Input() tabcontent: string;

    tabimage: any;
    tabdata = [];
    files: File[] = [];
    progress: number;
    dragFiles: any;
    validComboDrag: any;
    lastInvalids: any;
    fileDropDisabled: any;
    baseDropValid: any;
    lastFileAt: Date;

    constructor(
        private dialogRef: MatDialogRef<TabDialogComponent>,
        @Inject(MAT_DIALOG_DATA)
        private data: any,
    ) {
    }

    cancel() {
        this.dialogRef.close();
    }

    confirm() {
        if (this.tabname === undefined || this.tabname === '' || this.tabname === null) {
            alert('name is null!');
        } else if (this.tabcontent === undefined || this.tabcontent === '' || this.tabcontent === null) {
            alert('content is null!');
        } else {
            this.data.tabs.push(this.tabname);
            this.data.selected.setValue(this.data.tabs.length);
            this.tabdata = [this.tabcontent, this.tabimage];
            this.dialogRef.close(this.tabdata);
        }
    }

    getDate(index: number) {
        console.log(this.files);

        if (this.files.length > 1) {
            this.files.splice(index, 1);
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = () => {
                this.tabimage = reader.result;
                    // console.log(this.tabimage);
            };
        } else {
            const reader = new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload = () => {
                this.tabimage = reader.result;
                    // console.log(this.tabimage);
            };
        }
        return new Date();
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
