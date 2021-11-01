# Framework-with-TypeScript
## About the Project
I built this project to develop a framework based on the concept of composition structures and inheritance. This project is mainly structured by models and views. 

### Structure Overview

User 
 - handle Collection - manage ApiSync, Eventing, Attributes
 - extends Model

View (abstract class)
  - UserEdit
    - UserShow
    - UserForm

A list of commonly used resources that I find helpful is listed in the acknowledgments.

## Built With
* [TypeScript](https://www.typescriptlang.org/)


## Getting Started
To get a local copy up and running follow these simple example steps.

1. On the project GitHub page, navigate to the main page of the repository.
2. Under the repository name, locate and click on a green button named `Code`. 
3. Copy the project URL as displayed.
4. If you're running the Windows Operating System, open your command prompt. On Linux, Open your terminal. 
5. Change the current working directory to the location where you want the cloned directory to be made. Leave as it is if the current location is where you want the project to be. 
6. Type git clone, and then paste the URL you copied in Step 3. <br>
e.g. $ git clone https://github.com/yourUsername/yourProjectName 
7. Press Enter. Your local copy will be created. 
8. To install all dependencies, run `npm install`
9. To run json server, run `npm run start:db`
9. To compile and run code on server, run `npm run start:parcel`


## Author

👤 **Yoko Saka**

- GitHub: [@yocosaka](https://github.com/yocosaka)
- Twitter: [@yocosaka](https://twitter.com/yocosaka)
- LinkedIn: [Yoko Saka](https://www.linkedin.com/in/yokosaka)


## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](../../issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Show your support

Give a ⭐️ if you like this project!


## License

This project was built by following [Typescript: The Complete Developer's Guide](https://www.udemy.com/course/typescript-the-complete-developers-guide/) produced by [Stephen Grider](https://www.udemy.com/user/sgslo/)

## Acknowledgements
* [axios](https://www.npmjs.com/package/nodemon)
* [parcel](https://github.com/parcel-bundler/parcel)
* [json-server](https://www.npmjs.com/package/json-server)
