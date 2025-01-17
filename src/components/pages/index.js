export { default as Home } from "./Home/Home";
export { default as About } from "./About/About";
export { default as Contact } from "./Contact/Contact";
export { default as Services } from "./Services/Services";

//Home.js, About.js, Contact.js, and Services.js files
//  I use default exports, so I cannot use export * from in
//  index.js. Instead, I must explicitly re-export them
