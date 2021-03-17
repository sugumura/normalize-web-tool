import * as React from "react";
import Head from "next/head";

type Props = Partial<{
  title: string
}>

const AppHead: React.FC<Props> = ({
  title = ''
}) => {

  const defaultTitle = "Normalize Web Tool"

  return (
    <Head>
      <title>{title === "" ? defaultTitle : `${title} - ${defaultTitle}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default AppHead
