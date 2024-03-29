# Online Shopping Checkout Experience

This project is a user-friendly, visually engaging, and responsive online shopping checkout experience developed as part of the Frontend Developer - Intern assignment.

## Live Demo

You can view a live demo of the project [here](https://groww-assignment-project-git-main-omkars-projects-ecadebd9.vercel.app/).

## YouTube Demonstration

Watch a detailed demonstration of the project features on YouTube [here](https://youtu.be/RDsRbKM788E).


## GitHub Repository

The code for this project is available on GitHub [here](https://github.com/omkar-here/Groww_Assignment.git).

## Screenshots

![Homepage](https://github.com/omkar-here/Groww_Assignment/blob/main/Homepage.jpeg)
![CardPayment Page](https://github.com/omkar-here/Groww_Assignment/blob/main/CardPayment.jpeg)
![UPI Payment Page](https://github.com/omkar-here/Groww_Assignment/blob/main/UpiPayment.jpeg)
![Order Confirmation Page](https://github.com/omkar-here/Groww_Assignment/blob/main/OrderConfirmation.jpeg)

## Features Implemented

- **Caching**: Local API cache has been implemented to improve performance and reduce unnecessary API calls, enhancing the overall user experience.
  
- **Interactive Elements**: A responsive and dynamic user interface with smooth transitions and animations has been created to enhance the user experience.
  
- **Validation**: Proper form validation has been implemented on each page to handle user input errors. Payment information is validated according to the selected payment method.
  
- **Visual Appeal**: The UI design aligns with modern UI/UX principles, focusing on color schemes, typography, and overall aesthetics to create a visually appealing experience.
  
- **Responsiveness**: The application is responsive and works well on various screen sizes, ensuring a consistent user experience across devices.
  
- **User-Friendly Flow**: An intuitive and easy-to-navigate flow has been designed from the checkout to the payment selection and confirmation, enhancing user satisfaction.

## Design Choices

- **Technology Stack**: The project utilizes Next.js for server-side rendering, React for the frontend, Node.js and Express for the backend, and MongoDB for the database.
  
- **State Management**: The Context API has been used for state management, providing a centralized store for data and facilitating seamless updates across components.

## Challenges :

- **Deployment**: Deployment challenges were encountered due to an error at Vercel's end, resulting in wasted time and effort. This experience highlighted the importance of thorough testing and troubleshooting during deployment processes.

- **Caching**: NextJS inbuilt cache functionality for fetch requests wasn't working. So I implemented the caching method in a traditional manner. I tried "force-cache", "no-store" & "revalidate". But none seemed to fit in perfectly for the requirement.

- **Responsiveness**: Implementing responsiveness posed challenges due to complex layouts and the need to manage media queries effectively for different screen sizes.


1. Clone the repository to your local machine:
   `git clone https://github.com/omkar-here/Groww_Assignment.git`
  
2. Navigate to the project directory:
  `cd Groww_Assignment`
3. Install dependencies using npm or yarn:
  `npm install
     or
    yarn install`
 4. Run the Vercel app locally:
  `npm run dev
    or
    yarn dev`
  5. Access the local app in your web browser:
 `http://localhost:3000`



