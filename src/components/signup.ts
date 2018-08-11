import {ActionSheetController} from 'ionic-angular';

export class ActionSheet {
    
    constructor(public actionSheetCtrl : ActionSheetController) {}

    presentActionSheet() {
        const actionSheet = this.actionSheetCtrl.create({
            title: 'Modyfy your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                }
            ]
        });

        actionSheet.present();
    }

}