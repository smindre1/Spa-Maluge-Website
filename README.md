# Spa Maluge's Business Reservation & Management Website

**Developed By:** *Shane Mindreau*

**GitHub Profile:** [smindre1](https://github.com/smindre1)

**Description:** A modern business website made with Vite & React that provides a fast, interactive, and responsive user experience. This website is for the purpose of displaying the high-end massage parlor known as 'Spa Maluge', displaying a variety of services in depth with a classical baroque style inspired theme. The site features both commercial webpages meant for customers to browse information about the services and business, message the business directly, and to make a reservation. There are also non-commercial webpages that are meant for managing the business, protected with user authentication.

## Features

- **Fast and Lightweight:** Leveraging Vite for optimized build performance.

- **SEO Friendly:** Optimized for search engines to improve visibility.

- **Modern UI/UX:** Clean and professional design with intuitive navigation.

- **Simple Messaging:** The 'contact us' webpage displays a contact form that allows customers to easily submit a message that will be sent to the business' email address using the service [smtpjs](https://smtpjs.com/).

- **Customer Friendly Reservation:** The customers can go to the website's intelligible 'book now' page to make a reservation for up to five service (each with a maximum of two add-ons) in any available day and timeslot. Anything the customer selects to reserve will be display on the receipt summary on the right of the page.

- **REST API Integration:** Fetches and manages data through a separate REST API, ensuring real-time updates and efficient data handling.

- **Effective Management System:** The website holds several management webpages such as an staff login/signup, employee roster, reservation roster, and settings page (the settings page can only be seen by staff with a boss or admin position title). 

- **Secure:** Built-in security features, such as, user authentication and job position checking using encrypted json webtokens to protect data.

## Data Processing

All data is fetched and/or processed by the [Spa Maluge Database REST API](https://github.com/smindre1/Spa_Maluge_Database). This includes user data (specifically referencing business staff), inventory (The services provided), customer reservations, available business schedule, and available calendar days.

## Fonts

The following are the font-families used throughout the website:
 - **Exported Fonts:** Lato, Aref Ruqaa Ink, Great Vibes, Parisienne
 - **Default Fonts:** Serif, Sans-Serif, Times New Roman, Times

### *The exported fonts from google are added through the index.html script:*
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@400;700&family=Great+Vibes&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Parisienne&display=swap" rel="stylesheet">
```

## License
**The code is under the GNU General Public License v3.0**

The business name 'Spa Maluge' has been copyrighted and any unapproved use of the name is considered Copyright Infringement.

The svg border design assets were made and copyrighted by Shane Mindreau. The Maluge svg logo was redesigned by Shane Mindreau based on the Spa Maluge's brand image which is copyrighted and any unapproved use of the name is considered Copyright Infringement. Shane Mindreau was given permission to redesign the brand logo for the official business website and the redesigns are copyrighted.

## Deployed Website Hyperlink
**[Spa Maluge](https://spamaluge.com/)**

<!-- https://acuityscheduling.com/ -->

<!-- https://www.remove.bg/upload -->

<!-- - The Heroku API's ORIGIN variable allows cross browser requests. So make sure to update that. Add a token secret key .env variable that matches the API your are using's token secret.-->

<!-- 
Changes Made:
- Updated the reservation form.
- Added Service Checks
-Check if the service is filled before allowing it to be added
-Compare dates, times, and rooms to make sure nothing conflicts (don't want to double book).
- Complete service form/ service input error messages & error variables
- Made it so services could be removed
-make sure blank add ons are not displayed
-gets local storage list and records it to local variable
-add service (add to both local storage list and local variable)

Changes Planned:
****-reset local storage
[Reservation Form]
-reservation makes a check of times to see if they are all still available
-confirm reservation with/through pay method

-Set a check to see if the local storage value has been corrupted or changed in server (if so, reset it)

-have booknow adjust reservationforms keycount

- edit services
- max of 5 services

- Update reservationForm to remove keycount, serviceRefs, serviceId's

- Fix calendar (so it goes to next available day, not current day.)
- Make the calendar and schedule absolute

- get rid of attributes on service component since they are not needed

- add-on price is string when an actual add on service is selected

- Check if date for services are still available (both if it was already reserved or if the date already past)

- duplicate email issue

-->
