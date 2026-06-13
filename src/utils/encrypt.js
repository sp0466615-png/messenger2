const encrypt = (text) => {
    return Buffer.from(text).toString("base64");
};

const decrypt = (text) => {
    return Buffer.from(text, "base64").toString("utf-8");
};

module.exports = { encrypt, decrypt };