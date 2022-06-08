module.exports = {
  mode: "production",
  entry: "./app.js",
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
  },
  devServer: {
    static: "./public",
  },
  resolve: {
    extensions: [".js", ".glsl", "vs", "fs"],
  },
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      //Images
      {
        test: /\.(jpg|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      //Shader
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
    ],
  },
};
