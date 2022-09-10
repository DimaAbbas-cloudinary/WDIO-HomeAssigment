import Page from "./page";

class HomePage extends Page {

    //Selectors
    // The title of the home page --> 'Welcome to Cloudinary!'
    public get pageTitle() {
        return $('.eHWLRE');
    }

    // Methods
    //wait for displaying the title of the home page
    public async assertHomePageIsVisibile(){
        await (await this.pageTitle).waitForDisplayed();
        await expect(this.pageTitle).toHaveTextContaining('Welcome to Cloudinary!');
    }

}

export default new HomePage();