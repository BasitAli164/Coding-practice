**Empowering Financial Security - Payment Fraud**

Detecting Fraudulent Transactions with Advanced Machine Learning \& Predictive Analytics



**About the Dataset**

This dataset contains 38,662 e-commerce transactions annotated as legitimate or potentially fraudulent.  

A compact feature set (8 columns) enables fast experimentation with traditional ML models, tree ensembles, or modern deep-tabular networks.



| **Key Facts** | **Details** 						|

|-----------|---------------------------------------------------|

| Rows 	    | 38,662 						|

| Columns   | 8 (6 numerical / 1 categorical / 1 binary target) |

| Task      | Binary classification 				|

| License   | CC BY-SA 4.0 					|

| Created   | 2025-08-02 					|



**Repository Contents**

├── data/

&nbsp; ├── fraudulent\_transactions.csv # full dataset (38 662 × 8)

&nbsp; └── README.md # you are here





**Column Descriptions**



| **Column** 	       | **Type**     | **Description** 						   |

|----------------------|----------|----------------------------------------------------------------|

| accountAgeDays       | int 	  | Days since the customer account was created. 		   |

| numItems 	       | int      | Number of items in the cart. 				   |

| localTime            | float    | Local hour of the transaction (decimal). 			   |

| paymentMethod        | category | Payment instrument (`PayPal`, `StoreCredit`, `CreditCard`, …). |

| paymentMethodAgeDays | int 	  | Days since this payment method was linked to the account. 	   |

| isWeekend 	       | 0/1 	  | Weekend flag (`1` weekend, `0` weekday). 			   |

| Category 	       | category | Product vertical (`Electronics`, `Shopping`, `Food`, …). 	   |

| Label 	       | 0/1 	  | \*\*Target\*\* – `0` legitimate, `1` potential fraud. 		   |



**Getting Started**

1\. Clone the repo or download `payment\_fraud.csv`.

2\. Open the notebooks from `Code` section for EDA and baseline models, or build your own pipeline.



**Contributing**

Pull requests that add new modelling approaches, feature-engineering ideas, or interpretability analyses are welcome. Please open an issue first to discuss major changes.



**Citation**

If you use this dataset, please cite:

