export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/icon type"/>
        <title>S&S</title>
      </head>
      <body >
        {children}
      </body>
    </html>
  )
}
