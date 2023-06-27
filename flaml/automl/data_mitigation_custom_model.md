The code below outlines a way to construct a super class for AutoML estimators, which could
include both regular hyperparameters and data mitigation hyperparameters (including operation choices).

```python
from flaml.model import BaseEstimator

class CustomBaseEstimator(BaseEstimator):

    def __init__(self, **params):
        """ The constructor takes all the hyperparameter choices incuding
        both regular hyperparameters and data mitigation hyperparameters.
        """

    @classmethod
    def search_space(cls, data_size, task):
        """
        This search space contains the a set of learners' search space
        and the mitigation search space.
        """

    def fit(self, X_train, y_train, time_budget=None):
        """
        This function is used to fit the model.
        Depending on the choice of data mitigation, we should first apply
        the mitigation to the data, then fit the model.
        """
        # self.model = super().fit(X_train, y_train, time_budget=time_budget)
        return self

    def predict(self, X_test):
        """
        This function is used to make inferences on test data.
        For some of the mitigation choices, we should first apply
        the mitigation operation to test data, then do the inference.
        """
        # y_pred = super().predict(X_test)
        return y_pred
```
