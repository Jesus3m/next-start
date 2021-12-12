import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle<any>`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background: #F8F8FB;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  /* Esta propiedad define el delay que tendra el cambio del tema */
  transition: .3s all ease-in
}
`
export default GlobalStyle
