import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

// See object prototype on SEO.jsx page
const seoData = {
    title: "Off The Road Collective",
    description:
        "We are a sustainable fashion brand that aims to create a more sustainable future for the fashion industry. ",
    author: "Niamh Gowran & Kevin Tomescu",
    image: "",
    url: "https://offtheroadcollective.com/",
    keywords: [
        "Off The Road Collective",
        "Sustainable Fashion",
        "Fashion",
        "Sustainable",
        "Sustainable Fashion Brand",
        "Sustainable jewellery",
        "Handmade jewellery",
        "Recycled jewellery",
        "Irish jewellery",
        "Dublin City University",
    ]
}

function SEO() {
    return (
        <Head>
            <title>{seoData.title}</title>
            <meta name="title" content={seoData.title} />
            <meta name="author" content={seoData.author} />
            <meta name="description" content={seoData.description} />
            <met a name="keywords" content={seoData.keywords.join(", ")} />
            <link rel="canonical" href={seoData.url} />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={seoData.url} />
            <meta property="og:title" content={seoData.title} />
            <meta property="og:description" content={seoData.description} />
            <meta property="og:image" content={seoData.image} />
            <meta property="og:site_name" content={seoData.title} />
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={seoData.url} />
            <meta property="twitter:title" content={seoData.title} />
            <meta property="twitter:description" content={seoData.description} />
            <meta property="twitter:image" content={seoData.image} />
            <meta name="robots" content="Index" />
            <link rel="manifest" href="/manifest.json" />
            {/* Favicon */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

SEO.prototype = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        url: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};