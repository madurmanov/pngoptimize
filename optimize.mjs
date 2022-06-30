import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

const optimize = async () => {
  await imagemin(['./src/*.png'], {
    destination: './output/',
    plugins: [
      imageminPngquant({
        quality: [0.9, 1],
      }),
    ],
  });
};

optimize();
