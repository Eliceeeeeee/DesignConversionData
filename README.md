# DesignConversionData

A stand-alone HTML page to work with the latest Google Chrome browser written in React.js 
It also have using Jest and Enzyme for the testing the React.js

## Installation & usage

#### System Dependencies & Configuration

To run the website, you'll need:

* [npm](https://www.npmjs.com/), a package manager for the Node.js server platform. Node.js comes with npm installed.   

Next,
download this directory from GitHub. Open your Node.js command prompt and point to the directory to install the it.
Make sure you are connect to network. 

After this, run the following commands to run the website.

```sh
$ npm install
$ npm start  
```

## Instruction how to use the website

1. Click the ```+ Create new``` will initiate a GET request and fetch the person card data from API url : **https://reqres.in/api/users?page=1** and show as a list of person card. Each page will 3 person card once.

2. You can click the ```<``` previouse button or ```>``` next button to change the pages of the person card list.

3. You also can type the no of page you want to see directly into the middle textbox field , and click the ```Get people``` button to show the data you want to see.

- When you are in first page, the ```<``` previouse button will be hide, otherwise, it will always show and clickable.

- On the other hand, when next page have no more data to show, ```>``` next button will hide also, otherwise, it will always show and clickable.

- When you enter invalid no on the textbox field, it will show the error message ```Please enter a valid number```

- When you enter page bigger the the total page, it will also show the error message ```Page no. cannot less more than the total page :{no of total page}```


## Dependencies

When you run ```npm install```, it will auto install this dependencies.
- [enzyme](https://github.com/airbnb/enzyme)
- [jest](https://github.com/facebook/jest)

### Run test
```
npm test
```
