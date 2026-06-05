import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    return(
      this.props.html ?
        <li className={ this.props.type === 'default' ? "text-[var(--default-notification-item)] text-xs sm:text-sm md:text-base p-2 md:p-0 border-l-4 md:border-l-0 border-[var(--default-notification-item)] md:border-0 md:p-0" : "text-[var(--urgent-notification-item)] text-xs sm:text-sm md:text-base p-2 md:p-0 border-l-4 md:border-l-0 border-[var(--urgent-notification-item)] md:border-0 md:p-0" }
          data-notification-type={this.props.type}
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          onClick={() => this.props.markAsRead(this.props.id)} />:
        <li className={ this.props.type === 'default' ? "text-[var(--default-notification-item)] text-xs sm:text-sm md:text-base p-2 md:p-0 border-l-4 md:border-l-0 border-[var(--default-notification-item)] md:border-0 md:p-0" : "text-[var(--urgent-notification-item)] text-xs sm:text-sm md:text-base p-2 md:p-0 border-l-4 md:border-l-0 border-[var(--urgent-notification-item)] md:border-0 md:p-0" }
          data-notification-type={this.props.type}
          onClick={() => this.props.markAsRead(this.props.id)}>{ this.props.value }</li>
    );
  }
}

export default NotificationItem;
