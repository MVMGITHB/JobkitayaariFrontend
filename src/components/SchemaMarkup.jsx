"use client"; // Ensures it runs only on the client side

const SchemaMarkup = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default SchemaMarkup;
