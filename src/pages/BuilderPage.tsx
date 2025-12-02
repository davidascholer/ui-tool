/**
 * BuilderPage - Main page for the drag-and-drop UI builder
 * Features: Drag-and-drop hierarchy, component editing, code export
 */

import { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Layout } from '../components/builder/Layout';
import { UISide } from '../components/builder/UISide';
import { ResultSide } from '../components/builder/ResultSide';
import { Drawer } from '../components/builder/Drawer';
import { useBuilderState } from '../utils/state';
import type { ComponentType } from '@/utils/types';

export function BuilderPage() {
  const { state, actions } = useBuilderState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentDragItem, setCurrentDragItem] = useState<{ type: 'page' | 'container' | 'component'; componentType?: ComponentType } | null>(null);

  const handleDragStart = (type: 'page' | 'container' | 'component', componentType?: ComponentType) => {
    // Store what's being dragged for the drop handler
    setCurrentDragItem({ type, componentType });
  };

  const handleDrop = (targetId: string | undefined, targetType: typeof state.pages[0] extends never ? never : 'Page' | 'Container' | 'root') => {
    if (!currentDragItem) return;

    const { type, componentType } = currentDragItem;

    // Handle based on what's being dropped and where
    if (type === 'page' && targetType === 'root') {
      actions.addPage(`Page ${state.pages.length + 1}`);
    } else if (type === 'container' && targetType === 'Page' && targetId) {
      const page = state.pages.find(p => p.id === targetId);
      if (page) {
        actions.addContainer(targetId, `Container ${page.children.length + 1}`);
      }
    } else if (type === 'component' && targetType === 'Container' && targetId && componentType) {
      actions.addComponent(targetId, componentType);
    }

    setCurrentDragItem(null);
  };

  const handleSelect = (selection: typeof state.selection) => {
    actions.setSelection(selection);
    if (selection) {
      setDrawerOpen(true);
    }
  };

  const handleSave = (data: unknown) => {
    if (!state.selection) return;

    const { entityType, entityId } = state.selection;

    if (entityType === 'Page') {
      actions.updatePage(entityId, data as Partial<typeof state.pages[0]>);
    } else if (entityType === 'Container') {
      actions.updateContainer(entityId, data as Partial<typeof state.pages[0]['children'][0]>);
    } else if (entityType === 'Component') {
      actions.updateComponent(entityId, data as Partial<typeof state.pages[0]['children'][0]['children'][0]>);
    }
  };

  return (
    <>
      <SEO
        title="UI Builder - Create React & React Native Components"
        description="Build beautiful, responsive UIs with drag-and-drop. Create Pages, Containers, and Components, then export clean React or React Native code."
        canonical={typeof window !== 'undefined' ? window.location.href : undefined}
      />
      
      <Layout
        uiSide={<UISide onDragStart={handleDragStart} />}
        resultSide={
          <ResultSide
            pages={state.pages}
            selection={state.selection}
            onSelect={handleSelect}
            onDrop={handleDrop}
          />
        }
        drawer={
          <Drawer
            selection={state.selection}
            entity={actions.getSelectedEntity()}
            onSave={handleSave}
            onClose={() => setDrawerOpen(false)}
          />
        }
        drawerOpen={drawerOpen}
      />
    </>
  );
}

export default BuilderPage;
