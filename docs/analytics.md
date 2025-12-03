# Analytics Configuration

This document describes the analytics setup and configuration for the UI Builder application.

## Overview

The application uses the `analytics` package (v0.8.19) for privacy-conscious analytics tracking. The implementation prioritizes user privacy and follows GDPR and similar privacy regulations.

## Package Configuration

The analytics library is specified in `package.json`:

```json
{
  "dependencies": {
    "analytics": "^0.8.19"
  }
}
```

## Features

### Privacy-First Design

- **Respects Do Not Track**: Automatically disables tracking when browser's DNT header is set
- **No external plugins by default**: Uses only the core analytics package without third-party trackers
- **Configurable**: Can be enabled/disabled based on user consent
- **Event-based**: Only tracks specific user interactions, not continuous monitoring

### Tracked Events

The following events are tracked to improve the user experience:

1. **Component Usage**
   - `component_drag`: When users drag components from the catalog
   - `component_drop`: When components are successfully dropped into the canvas
   - `component_edit`: When users edit component properties
   - `component_delete`: When components are removed from the canvas

2. **Page Builder Activity**
   - `page_create`: When a new page is created
   - `page_export`: When users export generated code
   - `theme_toggle`: When users switch between light/dark themes

3. **User Experience**
   - `session_start`: When a user begins using the builder
   - `export_code`: When users export their UI to code
   - `error_occurred`: When errors occur (for debugging and improvement)

## Configuration

### Environment Variables

```bash
# Enable/disable analytics (default: enabled in production)
ANALYTICS_ENABLED=true

# Custom app identifier
ANALYTICS_APP_ID=ui-builder

# Development mode (disables analytics)
NODE_ENV=development
```

### Runtime Configuration

The analytics system can be configured at runtime:

```typescript
import { initializeAnalytics } from '@/api/controllers/analytics';

// Initialize with default settings
initializeAnalytics();

// Initialize with custom configuration
initializeAnalytics({
  enabled: true,
  appId: 'ui-builder-custom'
});
```

## Privacy Compliance

### Data Collection

- **No personal information**: Only anonymous usage patterns are collected
- **No persistent tracking**: No long-term user identification
- **Local processing**: Events are processed locally before any external transmission
- **Transparent**: Users can see exactly what data is collected

### User Rights

- **Opt-out**: Users can disable analytics through browser settings (Do Not Track)
- **Data portability**: Collected data can be exported (though minimal data is stored)
- **Right to deletion**: Users can request data deletion (contact information in app)

### GDPR Compliance

- Legal basis: Legitimate interest for product improvement
- Data minimization: Only necessary data is collected
- Purpose limitation: Data used only for improving the user experience
- Storage limitation: Data is not persisted long-term

## Implementation Details

### Controller Location

The main analytics logic is implemented in:
```
api/controllers/analytics.ts
```

### Key Functions

1. `initializeAnalytics()` - Sets up the analytics system
2. `trackEvent()` - Records user interactions
3. `getAnalyticsStatus()` - Checks if analytics is enabled

### Integration Points

- **Component interactions**: Tracked in UI components
- **Export functionality**: Tracked in code generators
- **Error boundaries**: Automatic error tracking
- **Theme system**: Usage tracking for UX insights

## Development

### Testing

Analytics tracking is automatically disabled in test environments. Mock functions are provided for unit testing:

```typescript
// In tests
vi.mock('@/api/controllers/analytics', () => ({
  trackEvent: vi.fn(),
  initializeAnalytics: vi.fn()
}));
```

### Local Development

Analytics is disabled by default in development mode (`NODE_ENV=development`) to avoid pollution of analytics data during development.

### Debugging

Enable analytics debugging by setting:

```bash
DEBUG=analytics:*
```

## Security Considerations

- **No sensitive data**: Component properties and user content are never transmitted
- **Sanitized events**: All tracked data is sanitized to prevent injection attacks
- **Rate limiting**: Event tracking is rate-limited to prevent abuse
- **Encryption**: All data transmission uses HTTPS

## Future Enhancements

Potential future improvements to the analytics system:

1. **Real-time dashboards** for monitoring application usage
2. **A/B testing framework** for feature experimentation
3. **Performance monitoring** integration
4. **Custom event definitions** for advanced users
5. **Plugin architecture** for extensible analytics

## Support

For questions about analytics configuration or data privacy:

- Check the [Privacy Policy](../privacy-policy.md)
- Review the [Terms of Service](../terms-of-service.md)
- Contact: privacy@ui-builder.dev (if applicable)

## References

- [Analytics Package Documentation](https://github.com/DavidWells/analytics)
- [GDPR Compliance Guide](https://gdpr.eu/compliance/)
- [Do Not Track Specification](https://www.w3.org/TR/tracking-dnt/)