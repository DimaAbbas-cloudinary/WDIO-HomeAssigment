import NavBar from '../pageobjects/components/NavBar';
import PopUp from '../pageobjects/components/PopUp';
import HomePage from '../pageobjects/home.page';
import LoginPage from  '../pageobjects/login.page';
import ManagePage from '../pageobjects/manage.page';
import MediaLibrary  from '../pageobjects/mediaLibrary.page';

describe('Test LogIn To Your Account On Cloudinary Web', () => {
    it('Should login with valid credentials', async () => {
        //LogIn page
        await LoginPage.open();

        await LoginPage.assertLoginPageIsVisible();
        await LoginPage.logIn('test.cloudinary10@gmail.com', '1234567Cloud$');
        await LoginPage.waitForSeconds(2);  

    });

    it('Should Load Home Page', async () => {
        //Home page
        await HomePage.assertHomePageIsVisibile();
        await HomePage.waitForSeconds(2);
    });
});

describe('Media Library Test', () => {
    it('Should load media library page',async () => {
        await NavBar.clickOnMediaLibrary();
        
        await MediaLibrary.assertMediaLibraryIsVisible();
        await MediaLibrary.waitForSeconds(2);
    });

    it('Should to show popup', async () => {
        await MediaLibrary.rightClickOnImage();

        await PopUp.assertPopUpIsVisible();
        await MediaLibrary.waitForSeconds(2);
        await PopUp.clickOnManageBtn();
    });
});

describe('Manage Image Page', () => {
    it('Should to validate the title', async () => {
        await ManagePage.assertManageTopBar();

        await ManagePage.waitForSeconds(2);

        await ManagePage.assertHomeAssignmentTitle();

    })
});


