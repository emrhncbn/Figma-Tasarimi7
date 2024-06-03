/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('https://s3-alpha-sig.figma.com/img/2565/3ec7/278cc3ab9ba8bd9d38507ad58650191b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXCTW3wFpzOt-X1r~F9WD8jLwmH5tcZTCH~m4xhC5irwQdAJwPzVDUXofMIGe~ULigUMngRfpAG2eVll7b9ZVBvax6ry~3il2mO3PvqqhpiXMTrpZL8e8WJXJ~6cWsqhse4n-Jj9BEaOLF7Cey5T0qjbD94vuZv736TeOBun5IZ0xQLPROOeKSkNwaojHUAwx7MxUevIBsw5YvXqv79CI51DueDznOZVK6bpleqblUT7qYb9XqCmwhxUl5s2AeDxeyMxIdtGQqe0Oh09NFdfPw-j7mE0DBxTN2Gvg9CPhKTKBZeh4HBSUHJfUEKn7bCogylyUKV90QX2JmX24MErwQ__')"
      },
    },
  },
  plugins: [],
};
