class UploadPopUp {
    // Selectors
    public get advancedBtn(){
        return $('[data-test="advanced-box"]');
    }

    public get publicId(){
        return $('[data-test="public-id"]');
    }

    public get uploadFile(){
        return $('.cloudinary_fileupload');
    }

    // Methods

    public async clickOnAdvanced(){
        await (await this.advancedBtn).click();
    }

    public async enterPublicId(id : string){
        await (await this.publicId).waitForDisplayed();
        await (await this.publicId).setValue(id);
    }

    public async uploadImg(imgPath : string){
        //const imgPath = '/Users/dimaabbas/Documents/Cloudinary-Logo.png';

        const remoteFilePath = await browser.uploadFile(imgPath);
        await (await this.uploadFile).setValue(remoteFilePath);
    }
}

export default new UploadPopUp();
