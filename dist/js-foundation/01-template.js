"use strict";
// ctrl + alt + }
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
    <div>
        <h1>Hi,{{name}}</h1>
        <p>Thanks you for your order.</p>
        <p>Order ID: {{orderId}}.</p>
    </div>
`;
