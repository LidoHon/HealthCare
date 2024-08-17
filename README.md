# Health Care Management System

## Overview

The Health Care Management System is a web application designed to streamline and manage patient care and administrative tasks in a healthcare setting. The system provides features for scheduling and managing appointments, storing patient information, and communicating with patients via SMS. It includes an admin dashboard for managing patient data and appointments.

## Technologies Used

- **Appwrite**: For database and storage solutions.
- **Twilio**: For SMS notifications and communication.
- **Tailwind CSS**: For utility-first styling.
- **Shadcn UI**: For reusable UI components and styling.
- **Next.js**: For server-side and client-side
  rendering.
- **Sentry**: For error tracking and monitoring.

## Features

- **Admin Dashboard**: Manage patient data, appointments, and other administrative tasks.
- **Appointment Scheduling**: Create, update, and cancel appointments.
- **Patient Management**: View and manage patient information.
- **SMS Notifications**: Send SMS notifications to patients using Twilio.

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- Yarn or npm
- A Twilio account (for SMS functionality)
- An Appwrite instance (for database and storage)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/LidoHon/HealthCare.git
   cd HealthCare
   ```

2. **Install Dependencies**

   ```bash
    npm install
    # or
    yarn install
   ```

3. **Setup Environment Variables**

   Create a .env file in the root directory and add the following environment variables. Replace the placeholder values with your actual credentials:

   ```bash
        # Appwrite Configuration
    PROJECT_ID=your-appwrite-project-id
    API_KEY=your-appwrite-api-key
    DATABASE_ID=your-appwrite-database-id
    PATIENT_COLLECTION_ID=your-appwrite-patient-collection-id
    DOCTOR_COLLECTION_ID=your-appwrite-doctor-collection-id
    APPOINTMENT_COLLECTION_ID=your-appwrite-appointment-collection-id
    NEXT_PUBLIC_BUCKET_ID=your-appwrite-bucket-id
    NEXT_PUBLIC_ENDPOINT=https://your-appwrite-endpoint

    # Admin Passkey for Secure Access
    NEXT_PUBLIC_ADMIN_PASSKEY=your-admin-passkey

    # Sentry for Error Tracking
    SENTRY_AUTH_TOKEN=your-sentry-auth-token
   ```


    PROJECT_ID: Your Appwrite project ID.
    API_KEY: Your Appwrite API key.
    DATABASE_ID: The ID of your Appwrite database.
    PATIENT_COLLECTION_ID: The ID of the collection for patient data.
    DOCTOR_COLLECTION_ID: The ID of the collection for doctor data.
    APPOINTMENT_COLLECTION_ID: The ID of the collection for appointment data.
    NEXT_PUBLIC_BUCKET_ID: The ID of your Appwrite storage bucket.
    NEXT_PUBLIC_ENDPOINT: The endpoint URL for your Appwrite instance.
    NEXT_PUBLIC_ADMIN_PASSKEY: Admin passkey for secure access to certain features.
    SENTRY_AUTH_TOKEN: Token for Sentry error tracking.
   

4.**Run the Development Server**

```bash
    npm run dev
    # or
    yarn dev
```


    **Contributing**
We welcome contributions to this project! To contribute:

Fork the Repository: Click the "Fork" button at the top right of the repository page on GitHub.

Clone Your Fork:

```bash

    git clone https://github.com/your-username/HealthCare.git

Create a Branch:

```bash

git checkout -b feature/your-feature
Make Changes: Implement your changes and commit them.

```bash

git add .
git commit -m "Add new feature"
Push Changes:

```bash

git push origin feature/your-feature
````
Submit a Pull Request: Go to the "Pull Requests" tab on GitHub and submit a pull request from your branch to the main repository.

**Guidelines**
Code Style: Follow the existing code style and conventions used in the project.
Testing: Ensure that your changes are covered by tests. Run tests locally before submitting a pull request.
Documentation: Update the documentation if your changes affect the setup or usage of the project.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or issues, please reach out to liduhon3@gmail.com.

