import Page from "./page";

class MediaLibrary extends Page{
    //Selectors
    public get mediaTitle(){
        return $('[data-test="typography"]');
    }

    public get HA_Element(){
        return $('[data-item-index="0"]');
    }

    //Methods
    public async assertMediaLibraryIsVisible() {
        await (await this.mediaTitle).waitForDisplayed();
        await expect(this.mediaTitle).toHaveTextContaining('Media Library');
    }

    public async rightClickOnImage(){
        await (await this.HA_Element).click({button: 'right'});
    }

}

export default new MediaLibrary();