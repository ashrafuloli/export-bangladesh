"use client"
import "@/assets/css/inter-fonts.css";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/spacing.css";
import "@/assets/css/fontawesome.min.css";
import "@/assets/scss/main.scss";
import {Metadata} from "@/components/common/Metadata/Metadata";

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>{Metadata.title}</title>
            <meta name="description" content={Metadata.description}/>
            <link rel="icon" href="/favicon.png" sizes="any"/>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
