import Page from "./page";

class ManagePage extends Page{
    // Selectors
    public get imgTitle(){
        return $('input[data-test="item-title"]');
    }

    public get manageTopBar(){
        return $('[data-test="manage-top-bar"]');
    }

    // methods
    public async assertManageTopBar(){
        await (await this.manageTopBar).waitForDisplayed();
    }

    public async verifyImgTitle(title : string){
        await expect(this.imgTitle).toHaveValueContaining(title);
    }
}

export default new ManagePage();