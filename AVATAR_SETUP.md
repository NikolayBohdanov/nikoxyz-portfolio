# Avatar Setup

## Step 1: Download Avatar

Download your GitHub avatar and save it to the public folder:

```bash
curl -L -o public/avatar.png "https://avatars.githubusercontent.com/u/100773227?v=4"
```

## Step 2: Remove Old Avatar

```bash
rm public/meme.png
```

## Avatar Specifications

- **Format**: PNG
- **Recommended Size**: 256x256px or larger
- **Shape**: Circular (rounded with CSS)
- **Border**: 2px slate-800

## Design Notes

The avatar is displayed with:
- Gradient glow effect (indigo to cyan)
- Smooth pulse animation on the glow
- Border for depth
- Hover effect that intensifies the glow
