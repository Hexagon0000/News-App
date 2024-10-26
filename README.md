# SKY NEWS

Welcome to **SKY NEWS**, a web application that aggregates news articles from various sources using the News API. This project presents news in a classic 1800s newspaper style, providing users with an engaging and nostalgic reading experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Adapts to different screen sizes for optimal viewing on mobile and desktop devices.
- **Search Functionality**: Users can search for news articles based on keywords.
- **Pagination**: Navigate through pages of articles using "Next" and "Previous" buttons.
- **Content Filtering**: Automatically filters out articles marked as "[Removed]" and those without images.

## Technologies Used

- **HTML**: Structure of the web application.
- **CSS**: Styling the application with a custom 1800s newspaper theme.
- **JavaScript**: Logic for fetching and displaying news articles from the News API.
- **Bootstrap**: For responsive layout and styling.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari)
- Internet access to fetch news articles

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/sky-news.git
   cd sky-news
   ```

2. Open `index.html` in your web browser to view the application.

### API Key

To use the News API, you'll need to sign up and obtain an API key. Replace the existing API key in the `fetchNews` function within the JavaScript code:

```javascript
const fetchNews = async (page, q) => {
    const apiKey = 'YOUR_API_KEY_HERE';
    // ...
};
```

## Usage

- **Home**: Click the "Home" button to fetch articles related to all topics.
- **Search**: Enter a query in the search box to find specific articles.
- **Navigation**: Use "Next" and "Previous" buttons to navigate through the pages of articles.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please feel free to reach out:

- Your Name - [ahmedefepetekk@gmail.com](mailto:ahmedefepetekk@gmail.com)
- GitHub: [Hexagon0000](https://github.com/Hexagon0000)
