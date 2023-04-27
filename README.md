# Login with Captcha
Login webpage with captcha to allow or deny submission of data.

## Description
This is a github repo made by Afif Afwan, 21B6027, taking UBD Module ZC-3302 IPD.

This is a mini project, where the goal is to make a webpage that takes in the user's registration only after the captcha challenge is successful.

This repo contains HTML, CSS, JS and PHP files.

## Guide
After initializing the necessary elements in the XAMPP server, please enter: `localhost/login/initialize.php` or press the button called _Initialize Database_ in `index.html` to set up the database and the table.

### `initalize.php` file's explaination
* The `initialize.php` file will connect to the mysql, and upon success, it enters `create_database.php`.
* Once the `create_database.php` has completed its task, it enters `create_table.php` to create a table under the database initialized.
* After `create_table.php` has finished, it will lead to the `index.html` file, where the registration and login activites can be conducted!
