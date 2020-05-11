const image = `data:image/png;base64, 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`;

export default image;