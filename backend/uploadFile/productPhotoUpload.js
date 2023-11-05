exports.uploadProductImage = async (file) => {
  const filestore = Date.now() + "." + file.name.slice(-3);
  const path = `${'./public/productImages'}/${filestore}`;
  file.mv(path, (err) => {
    if (err) {
      return err;
    }
  });
  return filestore;
};
