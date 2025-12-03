/**
 * Unit tests for React code generators
 * Feature 003: Component Tracking and Code Export - T040a, T040c
 */

import { describe, it, expect } from 'vitest';
import { generateButtonCode } from '../../../src/utils/code-generators/react/button';
import { generateInputCode } from '../../../src/utils/code-generators/react/input';
import { generateCardCode } from '../../../src/utils/code-generators/react/card';
import { generateTextCode } from '../../../src/utils/code-generators/react/text';
import { generateImageCode } from '../../../src/utils/code-generators/react/image';
import { generateListCode } from '../../../src/utils/code-generators/react/list';
import { generateContainerCode } from '../../../src/utils/code-generators/react/container';
import { generatePageCode } from '../../../src/utils/code-generators/react/page';
import { generateReactCode } from '../../../src/utils/code-generators/react';
import type { ComponentEntity, ContainerEntity, PageEntity } from '../../../src/utils/types';

describe('React Code Generators', () => {
  // Mock entities for testing
  const mockButton: ComponentEntity = {
    id: 'button-1',
    type: 'Button',
    props: { text: 'Click me', onClick: 'handleClick' },
    tailwindOptions: { classList: ['bg-blue-500', 'text-white', 'px-4', 'py-2'] },
  };

  const mockInput: ComponentEntity = {
    id: 'input-1',
    type: 'Input',
    props: { placeholder: 'Enter text', type: 'text' },
    tailwindOptions: { classList: ['border', 'rounded', 'p-2'] },
  };

  const mockCard: ComponentEntity = {
    id: 'card-1',
    type: 'Card',
    props: { text: 'Card content' },
    tailwindOptions: { classList: ['bg-white', 'shadow-lg', 'rounded-lg', 'p-4'] },
  };

  const mockText: ComponentEntity = {
    id: 'text-1',
    type: 'Text',
    props: { text: 'Hello World' },
    tailwindOptions: { classList: ['text-lg', 'font-bold'] },
  };

  const mockImage: ComponentEntity = {
    id: 'image-1',
    type: 'Image',
    props: { src: '/test.jpg', alt: 'Test image', width: 100, height: 100 },
    tailwindOptions: { classList: ['rounded-full'] },
  };

  const mockList: ComponentEntity = {
    id: 'list-1',
    type: 'List',
    props: { items: ['Item 1', 'Item 2', 'Item 3'] },
    tailwindOptions: { classList: ['space-y-2'] },
  };

  const mockContainer: ContainerEntity = {
    id: 'container-1',
    name: 'Test Container',
    tailwindOptions: { classList: ['flex', 'flex-col', 'gap-4'] },
    children: [mockButton, mockText],
  };

  const mockPage: PageEntity = {
    id: 'page-1',
    name: 'Test Page',
    children: [mockContainer],
  };

  const mockPages: PageEntity[] = [mockPage];

  describe('Button Generator', () => {
    it('generates basic button code', () => {
      const code = generateButtonCode(mockButton);
      expect(code).toContain('<button');
      expect(code).toContain('Click me');
      expect(code).toContain('className=');
      expect(code).toContain('</button>');
    });

    it('includes Tailwind classes', () => {
      const code = generateButtonCode(mockButton);
      expect(code).toContain('bg-blue-500');
      expect(code).toContain('text-white');
      expect(code).toContain('px-4');
      expect(code).toContain('py-2');
    });

    it('handles onClick prop', () => {
      const code = generateButtonCode(mockButton);
      expect(code).toContain('onClick={handleClick}');
    });
  });

  describe('Input Generator', () => {
    it('generates basic input code', () => {
      const code = generateInputCode(mockInput);
      expect(code).toContain('<input');
      expect(code).toContain('type="text"');
      expect(code).toContain('placeholder="Enter text"');
      expect(code).toContain('/>');
    });

    it('includes Tailwind classes', () => {
      const code = generateInputCode(mockInput);
      expect(code).toContain('border');
      expect(code).toContain('rounded');
      expect(code).toContain('p-2');
    });

    it('handles different input types', () => {
      const emailInput: ComponentEntity = {
        ...mockInput,
        props: { ...mockInput.props, type: 'email' },
      };
      const code = generateInputCode(emailInput);
      expect(code).toContain('type="email"');
    });
  });

  describe('Card Generator', () => {
    it('generates basic card code', () => {
      const code = generateCardCode(mockCard);
      expect(code).toContain('<div');
      expect(code).toContain('Card content');
      expect(code).toContain('</div>');
    });

    it('handles children code', () => {
      const childrenCode = ['<p>Child 1</p>', '<p>Child 2</p>'];
      const code = generateCardCode(mockCard, childrenCode);
      expect(code).toContain('<p>Child 1</p>');
      expect(code).toContain('<p>Child 2</p>');
    });
  });

  describe('Text Generator', () => {
    it('generates basic text code', () => {
      const code = generateTextCode(mockText);
      expect(code).toContain('<p');
      expect(code).toContain('Hello World');
      expect(code).toContain('</p>');
    });

    it('includes typography classes', () => {
      const code = generateTextCode(mockText);
      expect(code).toContain('text-lg');
      expect(code).toContain('font-bold');
    });
  });

  describe('Image Generator', () => {
    it('generates basic image code', () => {
      const code = generateImageCode(mockImage);
      expect(code).toContain('<img');
      expect(code).toContain('src="/test.jpg"');
      expect(code).toContain('alt="Test image"');
      expect(code).toContain('/>');
    });

    it('includes dimensions', () => {
      const code = generateImageCode(mockImage);
      expect(code).toContain('width="100"');
      expect(code).toContain('height="100"');
    });
  });

  describe('List Generator', () => {
    it('generates basic list code', () => {
      const code = generateListCode(mockList);
      expect(code).toContain('<ul');
      expect(code).toContain('<li>Item 1</li>');
      expect(code).toContain('<li>Item 2</li>');
      expect(code).toContain('<li>Item 3</li>');
      expect(code).toContain('</ul>');
    });
  });

  describe('Container Generator', () => {
    it('generates basic container code', () => {
      const code = generateContainerCode(mockContainer, []);
      expect(code).toContain('<div');
      expect(code).toContain('Container');
      expect(code).toContain('</div>');
    });

    it('includes children code', () => {
      const childrenCode = ['<button>Test</button>', '<p>Text</p>'];
      const code = generateContainerCode(mockContainer, childrenCode);
      expect(code).toContain('<button>Test</button>');
      expect(code).toContain('<p>Text</p>');
    });
  });

  describe('Page Generator', () => {
    it('generates basic page code', () => {
      const code = generatePageCode(mockPage, []);
      expect(code).toContain('<div');
      expect(code).toContain('className="page-wrapper"');
      expect(code).toContain('</div>');
    });

    it('includes children code', () => {
      const childrenCode = ['<div>Container 1</div>', '<div>Container 2</div>'];
      const code = generatePageCode(mockPage, childrenCode);
      expect(code).toContain('<div>Container 1</div>');
      expect(code).toContain('<div>Container 2</div>');
    });
  });

  describe('Main React Code Generator', () => {
    it('generates code for page entities', () => {
      const code = generateReactCode('Page', 'page-1', mockPages);
      expect(code).toContain('import React from \'react\'');
      expect(code).toContain('<div className="page-wrapper">');
    });

    it('generates code for container entities', () => {
      const code = generateReactCode('Container', 'container-1', mockPages);
      expect(code).toContain('<div');
      expect(code).toContain('<button');
      expect(code).toContain('<p');
    });

    it('generates code for component entities', () => {
      const code = generateReactCode('Component', 'button-1', mockPages);
      expect(code).toContain('<button');
      expect(code).toContain('Click me');
    });

    it('returns error for missing entities', () => {
      const code = generateReactCode('Page', 'missing-id', mockPages);
      expect(code).toContain('// Page not found');
    });
  });
});