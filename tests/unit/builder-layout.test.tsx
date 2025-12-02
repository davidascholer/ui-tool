/**
 * Foundational tests for builder layout components
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Layout } from '@/components/builder/Layout';
import { UISide } from '@/components/builder/UISide';
import { ResultSide } from '@/components/builder/ResultSide';
import { Drawer } from '@/components/builder/Drawer';

describe('Builder Layout', () => {
  it('renders layout with three sections', () => {
    render(
      <Layout
        uiSide={<div data-testid="ui-side">UI</div>}
        resultSide={<div data-testid="result-side">Result</div>}
        drawer={<div data-testid="drawer">Drawer</div>}
        drawerOpen={true}
      />
    );

    // On desktop view (hidden on mobile in test)
    expect(screen.getByLabelText('Component palette')).toBeInTheDocument();
    expect(screen.getByLabelText('Builder canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Property editor')).toBeInTheDocument();
  });

  it('hides drawer when drawerOpen is false', () => {
    render(
      <Layout
        uiSide={<div>UI</div>}
        resultSide={<div>Result</div>}
        drawer={<div>Drawer</div>}
        drawerOpen={false}
      />
    );

    const drawer = screen.getByLabelText('Property editor');
    expect(drawer).toHaveClass('translate-x-full');
  });
});

describe('UISide', () => {
  it('renders component categories', () => {
    render(<UISide />);

    expect(screen.getByText('Pages')).toBeInTheDocument();
    expect(screen.getByText('Containers')).toBeInTheDocument();
    // "Components" appears as both heading and section title
    expect(screen.getAllByText('Components').length).toBeGreaterThanOrEqual(1);
  });

  it('renders MVP catalog items', () => {
    render(<UISide />);

    // Page
    expect(screen.getByLabelText('Drag Page to canvas')).toBeInTheDocument();
    
    // Containers
    expect(screen.getByLabelText('Drag Container to canvas')).toBeInTheDocument();
    
    // Components (MVP catalog)
    expect(screen.getByLabelText('Drag Button to canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Drag Input to canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Drag Card to canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Drag Text to canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Drag Image to canvas')).toBeInTheDocument();
    expect(screen.getByLabelText('Drag List to canvas')).toBeInTheDocument();
  });
});

describe('ResultSide', () => {
  it('shows empty state when no pages', () => {
    render(<ResultSide pages={[]} selection={null} />);

    expect(screen.getByText('Start Building')).toBeInTheDocument();
    expect(screen.getByText('Drag a Page from the left sidebar to begin')).toBeInTheDocument();
  });

  it('renders pages with hierarchy', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home Page',
        children: [
          {
            id: 'container-1',
            name: 'Hero Section',
            tailwindOptions: { classList: [] },
            children: [
              {
                id: 'component-1',
                type: 'Button' as const,
                props: {},
                tailwindOptions: { classList: [] },
              },
            ],
          },
        ],
      },
    ];

    render(<ResultSide pages={pages} selection={null} />);

    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('Hero Section')).toBeInTheDocument();
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('highlights selected entity', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home Page',
        children: [],
      },
    ];

    const { container } = render(
      <ResultSide
        pages={pages}
        selection={{ entityType: 'Page', entityId: 'page-1' }}
      />
    );

    const selectedElement = container.querySelector('[aria-label="Page: Home Page"]');
    expect(selectedElement).toHaveClass('border-[rgb(var(--color-selected))]');
  });
});

describe('Drawer', () => {
  it('shows empty state when no selection', () => {
    render(<Drawer selection={null} entity={null} />);

    expect(screen.getByText('Select an element to edit its properties')).toBeInTheDocument();
  });

  it('renders page form when page selected', () => {
    const page = {
      id: 'page-1',
      name: 'Home Page',
      children: [],
    };

    render(
      <Drawer
        selection={{ entityType: 'Page', entityId: 'page-1' }}
        entity={page}
      />
    );

    expect(screen.getByText('Edit Page')).toBeInTheDocument();
    expect(screen.getByLabelText('Page Name')).toBeInTheDocument();
    expect(screen.getByLabelText('SEO Title')).toBeInTheDocument();
    expect(screen.getByLabelText('SEO Description')).toBeInTheDocument();
  });

  it('renders container form when container selected', () => {
    const container = {
      id: 'container-1',
      name: 'Hero Section',
      tailwindOptions: { classList: [] },
      children: [],
    };

    render(
      <Drawer
        selection={{ entityType: 'Container', entityId: 'container-1' }}
        entity={container}
      />
    );

    expect(screen.getByText('Edit Container')).toBeInTheDocument();
    expect(screen.getByLabelText('Container Name')).toBeInTheDocument();
  });

  it('renders component form when component selected', () => {
    const component = {
      id: 'component-1',
      type: 'Button' as const,
      props: {},
      tailwindOptions: { classList: [] },
    };

    render(
      <Drawer
        selection={{ entityType: 'Component', entityId: 'component-1' }}
        entity={component}
      />
    );

    expect(screen.getByText('Edit Component')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Button')).toBeInTheDocument();
  });
});
