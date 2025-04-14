import { emailTemplate } from "../../src/js-foundation/01-template";

describe('01-template', () => {
  test('emailTemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hello, ');
  });

  test('emailTemplate should contain a {{name}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    
    expect(emailTemplate).toContain('{{name}}');
  });
});