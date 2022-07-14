import {MenuContentPage, DressesListPage} from "../page/index";


describe("the user navigates to the dresses page", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const names: string[] = [
    "\n\t\t\t\t\t\t\tPrinted Dress\n\t\t\t\t\t\t",
    "\n\t\t\t\t\t\t\tPrinted Dress\n\t\t\t\t\t\t",
    "Printed Summer Dress",
    "Printed Summer Dress",
    "\n\t\t\t\t\t\t\tPrinted Chiffon Dress\n\t\t\t\t\t\t",

  ];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
