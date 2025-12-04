/**
 * Keyboard Navigation Help Component
 * Feature 004: Real-Time Hierarchy Updates - T049
 * Displays keyboard shortcuts and navigation help
 */

import { useState } from 'react';
import { HelpCircle, X, Keyboard } from 'lucide-react';

export interface KeyboardShortcut {
  keys: string;
  description: string;
  category: 'navigation' | 'selection' | 'modification';
}

const keyboardShortcuts: KeyboardShortcut[] = [
  // Navigation
  {
    keys: '↑ ↓',
    description: 'Navigate up/down in hierarchy',
    category: 'navigation'
  },
  {
    keys: '← →',
    description: 'Collapse/expand items or move between levels',
    category: 'navigation'
  },
  
  // Selection
  {
    keys: 'Enter',
    description: 'Select item or toggle expansion',
    category: 'selection'
  },
  {
    keys: 'Space',
    description: 'Select current item',
    category: 'selection'
  },
  
  // Modification
  {
    keys: 'Delete',
    description: 'Delete selected item',
    category: 'modification'
  },
  {
    keys: 'Backspace',
    description: 'Delete selected item',
    category: 'modification'
  },
  {
    keys: '+',
    description: 'Expand current item',
    category: 'modification'
  },
  {
    keys: '-',
    description: 'Collapse current item',
    category: 'modification'
  }
];

/**
 * Compact keyboard help tooltip/popover
 */
export function KeyboardHelpTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        aria-label="Keyboard shortcuts"
        title="Show keyboard shortcuts"
      >
        <Keyboard className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popover */}
          <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-lg shadow-lg border z-20">
            <div className="flex items-center justify-between p-3 border-b">
              <h3 className="font-medium text-gray-900">Keyboard Shortcuts</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-2 max-h-64 overflow-y-auto">
              {['navigation', 'selection', 'modification'].map(category => (
                <div key={category} className="mb-3">
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1 px-2">
                    {category}
                  </h4>
                  <div className="space-y-1">
                    {keyboardShortcuts
                      .filter(shortcut => shortcut.category === category)
                      .map((shortcut, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-2 py-1 text-sm"
                        >
                          <span className="text-gray-700">{shortcut.description}</span>
                          <kbd className="px-1.5 py-0.5 text-xs font-mono bg-gray-100 rounded border">
                            {shortcut.keys}
                          </kbd>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-3 py-2 bg-gray-50 rounded-b-lg">
              <p className="text-xs text-gray-500">
                Focus any hierarchy item to use keyboard navigation
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Full keyboard help modal/panel
 */
export function KeyboardHelpModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-96 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-900">
                Keyboard Navigation Help
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 overflow-y-auto">
            <p className="text-sm text-gray-600 mb-4">
              Use these keyboard shortcuts to navigate the hierarchy efficiently:
            </p>
            
            {['navigation', 'selection', 'modification'].map(category => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 capitalize">
                  {category}
                </h3>
                <div className="space-y-2">
                  {keyboardShortcuts
                    .filter(shortcut => shortcut.category === category)
                    .map((shortcut, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-1"
                      >
                        <span className="text-sm text-gray-700">
                          {shortcut.description}
                        </span>
                        <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 rounded border">
                          {shortcut.keys}
                        </kbd>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-3 bg-blue-50 rounded-md">
              <h4 className="text-sm font-medium text-blue-900 mb-1">
                Accessibility Tips
              </h4>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Focus any item to start keyboard navigation</li>
                <li>• Screen readers will announce navigation changes</li>
                <li>• Use Tab to move between different sections</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 border-t">
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyboardHelpTooltip;