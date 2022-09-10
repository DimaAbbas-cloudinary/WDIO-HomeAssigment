class NavBar{
    //Selectros
    //Media Library Option
    public get mediaBtn(){
        return $('[data-balloon="Media Library"]');
    }

    //Methods
    public async clickOnMediaLibrary(){
        await (await this.mediaBtn).click();
    }
}

export default new NavBar();