# Food Delivery App

A modern and beautiful **React Native** food delivery application built with TypeScript and React Navigation. This app provides a complete food ordering experience with a user-friendly interface and smooth navigation.

## 🚀 Features

- **Splash Screen**: Engaging introduction to the app
- **User Authentication**: Secure login functionality
- **Home Screen**: Browse featured products and categories
- **Product Catalog**: Detailed product information with images
- **Shopping Cart**: Add, remove, and manage cart items
- **Order Confirmation**: Complete checkout process
- **Responsive Design**: Optimized for both iOS and Android
- **TypeScript Support**: Type-safe development
- **Modern Navigation**: Smooth screen transitions with React Navigation

## 📱 Screens

1. **Splash Screen** - App introduction and branding
2. **Login Screen** - User authentication
3. **Home Screen** - Featured products, categories, and search
4. **Product Screen** - Detailed product information
5. **Cart Screen** - Shopping cart management
6. **Order Confirmation** - Checkout and order completion

## 🛠️ Tech Stack

- **React Native**: Cross-platform mobile development
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation and routing
- **React Native Gesture Handler**: Touch handling and gestures
- **React Native Safe Area Context**: Handle device safe areas
- **React Native Screens**: Native screen optimization

## 📦 Dependencies

### Core Dependencies
- `react`: 19.1.0
- `react-native`: 0.81.4
- `@react-navigation/native`: ^6.1.18
- `@react-navigation/native-stack`: ^6.11.0
- `@react-navigation/stack`: ^6.4.1
- `react-native-gesture-handler`: ^2.14.0
- `react-native-safe-area-context`: ^5.5.2
- `react-native-screens`: ~3.35.0

### Development Dependencies
- `@babel/core`: ^7.25.2
- `@types/react`: ^19.1.0
- `typescript`: ^5.8.3
- `eslint`: ^8.19.0
- `prettier`: 2.8.8
- `jest`: ^29.6.3

## 🏗️ Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable UI components
├── context/          # React context providers (CartContext)
├── navigation/       # Navigation configuration
├── screens/          # App screens
│   ├── Cart/         # Cart screen
│   ├── Home/         # Home screen
│   ├── Login/        # Login screen
│   ├── OrderConfirmation/ # Order confirmation
│   ├── Product/      # Product details
│   └── Splash/       # Splash screen
├── theme/            # App theming and styles
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## 🚀 Getting Started

> **Note**: Make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Prerequisites

- Node.js >= 20
- npm or yarn
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd food-delivery
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **Install iOS dependencies (CocoaPods)**
   ```bash
   cd ios
   bundle install
   bundle exec pod install
   cd ..
   ```

### Running the App

#### Start Metro Bundler

First, start the Metro bundler:

```bash
# Using npm
npm start

# OR using Yarn
yarn start
```

#### Run on Android

```bash
# Using npm
npm run android

# OR using Yarn
yarn android
```

#### Run on iOS

```bash
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

## 🔧 Development

### Code Quality

- **ESLint**: Code linting with React Native rules
- **Prettier**: Code formatting
- **TypeScript**: Type checking

### Scripts

```bash
npm run lint        # Run ESLint
npm start          # Start Metro bundler
npm run android    # Run on Android
npm run ios        # Run on iOS
npm test           # Run tests
```

## 📱 Screenshots

*(Add screenshots of your app here)*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/) for the amazing framework
- [React Navigation](https://reactnavigation.org/) for navigation solution
- All the contributors and maintainers of the dependencies used in this project

## 📞 Support

If you have any questions or need support, please open an issue in the repository.

# Troubleshooting

If you encounter any issues during setup or development, please check:

- [React Native Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started/)
- Common issues:
  - Make sure all dependencies are properly installed
  - Check that Metro bundler is running
  - Verify iOS CocoaPods are installed correctly
  - Ensure Android emulator is properly configured

# Learn More

To learn more about the technologies used in this project:

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation Documentation](https://reactnavigation.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
