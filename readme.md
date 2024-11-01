# YUV.AI Image Prompter by Yuval Avidani 🎨

An elegant web application that analyzes images using advanced AI vision models and generates detailed prompts for image generation.

## Features ✨

- **Drag & Drop Interface**: Easy image upload with a modern, intuitive interface
- **Dual AI Analysis**: 
  - Vision Model: Detailed image analysis and description
  - Language Model: Generates optimized prompts for image generation
- **Secure API Management**: Secure storage of API keys with local persistence
- **Copy Functionality**: One-click copying of both descriptions and prompts
- **Modern UI/UX**: 
  - Apple-style design
  - Animated gradients
  - Loading indicators
  - Success animations
  - Dynamic background effects

## Setup 🚀

1. Clone the repository
2. Open `index.html` in your browser
3. Add your API keys:
   - Vision Model API Key
   - Language Model API Key

## Technical Details 🔧

### Vision Model
- Uses Gemini 1.5 Flash for image analysis
- Supports image formats: PNG, JPEG, WEBP, HEIC, HEIF
- Maximum resolution: 3072x3072 (automatically scaled)

### Language Model
- Uses Cohere for prompt generation
- Optimized for detailed, structured prompts
- Includes camera angles, lighting, and composition details

## Best Practices 📝

For optimal results:
- Use clear, well-lit images
- Rotate images to correct orientation before upload
- Ensure images are not blurry
- Wait for both analyses to complete before using results

## Security 🔒

- API keys are stored locally in the browser
- Keys are never sent to any server except the respective API endpoints
- All processing happens client-side

## Contributing 🤝

Feel free to submit issues and enhancement requests!

## License 📄

[MIT License](LICENSE)
