import Page from "./page";

class MediaLibrary extends Page{
    //Selectors
    public get uploadIframe(){
        return $('iframe[data-test="uw-iframe"]');
    }

    public get mediaTitle(){
        return $('[data-test="typography"]');
    }

    public get HA_Element(){
        return $('[data-item-index="0"]');
    }

    public get uploadBtn(){
        return $('[data-test="upload-btn"]')
    }

    //Methods
    public async assertMediaLibraryIsVisible() {
        await (await this.mediaTitle).waitForDisplayed();
        await expect(this.mediaTitle).toHaveTextContaining('Media Library');
    }

    public async rightClickOnImage(){
        await (await this.HA_Element).click({button: 'right'});
    }

    public async clickOnUploadBtn(){
        await (await this.uploadBtn).click();
    }

    public async switchToUploadFrame(){
        await (await this.uploadIframe).waitForDisplayed();
        browser.switchToFrame(await this.uploadIframe);
    }

    public async switchToMediaFrame(){
        browser.switchToFrame(null);
    }
}

export default new MediaLibrary();