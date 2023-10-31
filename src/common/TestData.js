const TestData = {


    nextARB: {
        SearchBox: "input[id='arbAppSearch']",
        Results: "div[class='flex items-center p-3 cursor-pointer bg-white hover:bg-gray-200']",
        ChangeFilter: "div[class='font-sans flex items-center text-xs text-slate-600 underline cursor-pointer']",
        SelectStore: "input[placeholder='Select an app store']",
        AppleStore: "//span[text()='Apple App Store']",
        GoogleStore: "//span[text()='Google Play Store",
        Country: "input[placeholder='Select a search country']",
        India: "//div[normalize-space()='India']",
        
    },

    ARB: {
        SearchBox: "input[class='search__input']",
        ChangeFilter: "img[class='change-filters__image']",
        AppleStore:"div[class='combobox__option']",
        Results: "div[class='search__result-container']",
        Country: "div.combobox__option",
    },

    keyword: {
        AppName: "Instagram",
    }
};
export { TestData };