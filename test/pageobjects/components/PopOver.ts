class PopUp{
    // Selectors
    public get popUpForm(){
        return $('[data-test="popover"]');
    }

    public get manageBtn(){
        return $('[data-test="action-manage-btn"]')
    }

    //Methods
    public async assertPopUpIsVisible(){
        await (await this.popUpForm).waitForDisplayed();
    }

    public async clickOnManageBtn(){
        await (await this.manageBtn).click();
    }
}

export default new PopUp();
