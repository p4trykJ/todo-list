import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: colors.pink['300'],
      },
    },
  },
});
