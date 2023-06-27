
A potential design of the hierarchical search space for data mitigation (as of 06/27/2023)

```python
search_space = {
    "action_config_1": tune.choice([func_0_ss, func_1_ss, func_2_ss,..., func_N_ss]),
    "action_config_2": tune.choice([func_0_ss, func_1_ss, func_2_ss,..., func_N_ss]),
    ...,
    "action_config_M": tune.choice([func_0_ss, func_1_ss, func_2_ss,..., func_N_ss]),
    "cohort_choice_1": tune.randint([1,..., 2**(C+1)]),         # C is the total number of cohorts
    "cohort_choice_2": tune.randint([1,..., 2**(C+1)]),         # C is the total number of cohorts
    ...,
    "cohort_choice_M": tune.randint([1,..., 2**(C+1)]),         # C is the total number of cohorts
}

func_0_ss = {
    "func_name": "no_mitigation",
}

func_1_ss = {
    "func_name": "scaler",
    "func_hp_1": tune.uniform(0, 1),
    "func_hp_2": tune.uniform(0, 1),
}
```
