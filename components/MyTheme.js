import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext(); // khởi tạo context cho theme
// khi sử dụng sẽ dùng thẻ <MyTheme >....</MyTheme> để bao gói giao diện ứng dụng
// phần .... ở cấu trúc trên là thuộc tính children
export const MyTheme = ({ children }) => {
  // tạo state để lưu trạng thái chọn theme
  const [theme, setTheme] = useState("light"); // tên theme tự định nghĩa.

  // tạo hàm chuyển đổi giao diện
  const toggleTheme = () => {
    // tùy theo có nhiều mẫu giao diện thì dùng if else....
    setTheme(theme === "light" ? "dark" : "light");
  };

  // return về một theme contexxt
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};