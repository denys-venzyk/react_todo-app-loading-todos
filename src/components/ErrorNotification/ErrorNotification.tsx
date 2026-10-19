import classNames from 'classnames';
import React, { useEffect } from 'react';

type Props = {
  errorMessage: string;
  onErrorMessageChange: (errorMessage: string) => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  onErrorMessageChange,
}) => {
  useEffect(() => {
    if (!errorMessage) {
      return;
    }

    const timerId = setTimeout(() => onErrorMessageChange(''), 3000);

    return () => clearTimeout(timerId);
  }, [errorMessage, onErrorMessageChange]);

  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification is-danger is-light has-text-weight-normal',
        {
          hidden: !errorMessage,
        },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onErrorMessageChange('')}
      />
      {errorMessage}
    </div>
  );
};
