import NavBar from '../pageobjects/components/NavBar';
import PopUp from '../pageobjects/components/PopOver';
import UploadPopUp from '../pageobjects/components/UploadPopUp';
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
});

describe.skip('Manage Image Page and validate the title of the image', () => {
    it('Validate the title of the image', async () => {
        await MediaLibrary.rightClickOnImage();

        await PopUp.assertPopUpIsVisible();
        await MediaLibrary.waitForSeconds(2);
        await PopUp.clickOnManageBtn();

        await ManagePage.assertManageTopBar();

        await ManagePage.waitForSeconds(2);

        await ManagePage.verifyImgTitle('Home assignment');
    })
});

describe('Upload an image from PC and verify the public ID', () => {
    it('Upload an image from PC & Enter a public ID', async () => {
        await MediaLibrary.clickOnUploadBtn();
        await MediaLibrary.switchToUploadFrame();

        await MediaLibrary.waitForSeconds(3);
        await UploadPopUp.clickOnAdvanced();
        //Enter Public Id
        await UploadPopUp.enterPublicId('123456789');
        //Upload an image from PC
        await UploadPopUp.uploadImg('/Users/dimaabbas/Documents/Cloudinary-Logo.png');
        await MediaLibrary.waitForSeconds(2);

        await MediaLibrary.switchToMediaFrame();
        await MediaLibrary.waitForSeconds(5);
    });

    it('Verify the public ID of the image', async () => {
        await MediaLibrary.rightClickOnImage();

        await PopUp.assertPopUpIsVisible();
        await MediaLibrary.waitForSeconds(2);
        await PopUp.clickOnManageBtn();

        await ManagePage.assertManageTopBar();

        await ManagePage.waitForSeconds(5);
        await ManagePage.verifyImgTitle('123456789');
    });
});


